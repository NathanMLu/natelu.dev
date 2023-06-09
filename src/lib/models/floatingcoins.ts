export interface FloatingCoins {
    x: number;
    y: number;
    velX: number;
    velY: number;
    opacity: number;
    opacityIncreasing: boolean;
}

export const COIN_MAX_VEL = 0.5;
export const COIN_MIN_VEL = -0.5;
export const COIN_MAX_OPACITY = 0.5;
export const COIN_MAX_OPACITY_CHANGE = 0.003;
export const COIN_MIN_OPACITY_CHANGE = 0.001;