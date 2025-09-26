import { Rocket } from 'lucide-react'
import React from 'react'

export const RocketLogo = () => {
    return (
        <div className="relative inline-block mb-2">
            <div
                className="w-16 h-16 rounded-2xl  flex items-center justify-center mx-auto mb-0 transform transition-transform duration-300 hover:scale-110"
                style={{
                    background: 'var(--login-icon-bg)'
                }}
            >
                <Rocket className="h-8 w-8 text-white" />
            </div>
        </div>
    )
}
