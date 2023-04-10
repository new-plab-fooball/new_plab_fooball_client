import React from 'react';
import { SuccessAniContainer } from '../../styles/common/animation';

const SuccessAni = () => {
    return (
        <SuccessAniContainer>
            <svg
                width="115px"
                height="115px"
                viewBox="0 0 133 133"
                version="1.1"
            >
                <g
                    id="check-group"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <circle
                        id="filled-circle"
                        fill="rgb(21, 112, 255)"
                        cx="66.5"
                        cy="66.5"
                        r="54.5"
                    />
                    <circle
                        id="white-circle"
                        fill="#FFFFFF"
                        cx="66.5"
                        cy="66.5"
                        r="55.5"
                    />
                    <circle
                        id="outline"
                        stroke="rgb(21, 112, 255)"
                        stroke-width="4"
                        cx="66.5"
                        cy="66.5"
                        r="54.5"
                    />
                    <polyline
                        id="check"
                        stroke="#FFFFFF"
                        stroke-width="5.5"
                        points="41 70 56 85 92 49"
                    />
                </g>
            </svg>
        </SuccessAniContainer>
    );
};

export default SuccessAni;