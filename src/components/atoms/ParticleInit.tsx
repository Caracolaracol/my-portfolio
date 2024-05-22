import { useCallback } from "react";
import Particles from "react-particles"
import { loadFull } from 'tsparticles';
import useTheme from "../../hooks/useTheme";

const ParticleInit = () => {
    const theme = useTheme()
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, []);
    const particlesLoaded = useCallback(async (container: any) => {

    }, []);


    return <div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                background: {
                    opacity: 0
                },
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        resize: true

                    },
                    modes: {
                        push: { quantity: 0.2 },
                    }
                },

                particles: {
                    color: { value: `${theme.theme == 'dark' ? "#D94A6D" : "#DE7F26"}` },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 20
                    },
                    shadow: {
                        blur: 8,
                        color: {
                            value: {
                                r: 227,
                                g: 119,
                                b: 25,
                            }

                        },
                        enable: true
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            speed: 0.05,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min"
                        },
                        value: {
                            min: 0,
                            max: 0.8
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: .01, max: 5 }
                    }
                }
            }}
        />
    </div>


};

export default ParticleInit