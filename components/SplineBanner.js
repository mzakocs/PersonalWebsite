import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// A cool animated and 3D Banner for the homepage
const SplineBanner = ({ className }) => {
    // Screen-size media query for Spline animation
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 768px)'
    });
    useEffect(() => {
        // Starts the Spline animation
        const app = new SpeRuntime.Application();
        // Will launch different zoom scenes based on screen resolution
        app.start(`js/${isDesktop ? 'scene' : 'scene_mobile'}.json`);
    }, []);
    return (
        <React.Fragment>
            <style jsx>{`
                canvas {
                    position: block;
                    outline: none;
                    max-height: 65vh;
                    height: 65vh;
                    max-width: 100%;
                }
                .banner {
                    height: 65vh;
                }
            `}</style>
            <div className="banner">
                <canvas id="canvas3d" className={className}></canvas>
            </div>
        </React.Fragment>
    );
}

export default SplineBanner;