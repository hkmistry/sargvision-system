'use client';

import React, { useEffect, useState } from 'react';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Inject the official production runtime viewer script tag directly into the DOM
    const scriptId = 'spline-viewer-runtime-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
      document.head.appendChild(script);
    }

    const handleScriptLoad = () => {
      setScriptLoaded(true);
      triggerLogoRemoval();
    };
    
    script.addEventListener('load', handleScriptLoad);
    // If the module script is already attached and evaluated
    if (window.customElements && window.customElements.get('spline-viewer')) {
      setScriptLoaded(true);
      triggerLogoRemoval();
    }

    function triggerLogoRemoval() {
      let checks = 0;
      const interval = setInterval(() => {
        checks++;
        const viewer = document.querySelector('spline-viewer');
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.getElementById('logo');
          if (logo) {
            const style = document.createElement('style');
            style.innerHTML = '#logo, .spline-logo, a[href*="spline.design"] { display: none !important; }';
            viewer.shadowRoot.appendChild(style);
            clearInterval(interval);
          }
        }
        if (checks > 30) clearInterval(interval);
      }, 100);
    }

    // Global Pointer Forwarding Engine to track cursor movements screen-wide
    const handleGlobalPointerMove = (e: PointerEvent) => {
      const viewer = document.querySelector('spline-viewer');
      if (viewer) {
        // Re-dispatch standard pointermove events globally straight to the viewer and its internal canvas shadow DOM
        const eventInit = {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          pointerType: e.pointerType,
          pointerId: e.pointerId,
          isPrimary: e.isPrimary,
        };

        const splinePointerEvent = new PointerEvent('pointermove', eventInit);
        viewer.dispatchEvent(splinePointerEvent);

        if (viewer.shadowRoot) {
          const canvas = viewer.shadowRoot.querySelector('canvas');
          if (canvas) {
            canvas.dispatchEvent(new PointerEvent('pointermove', eventInit));
          }
        }
      }
    };

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true });

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
      }
      window.removeEventListener('pointermove', handleGlobalPointerMove);
    };
  }, []);

  // Enforce the exact Aceternity/Shadcn robot raw file stream identifier
  const productionRobotScene = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

  return (
    <div className="w-full h-full min-h-[450px] relative flex items-center justify-center bg-transparent overflow-hidden">
      
      {!scriptLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75" />
        </div>
      )}

      {/* 
        Native HTML5 custom WebGL wrapper layer via React.createElement.
        Bypasses TypeScript JSX intrinsic elements verification, avoids compiler issues, and renders natively.
      */}
      {scriptLoaded && React.createElement('spline-viewer', {
        url: productionRobotScene,
        class: `w-full h-full border-0 bg-transparent min-h-full ${className || ''}`,
        style: { width: '100%', height: '100%', display: 'block' }
      })}
    </div>
  );
}