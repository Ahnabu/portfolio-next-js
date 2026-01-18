'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const LivePreviewModal = ({ isOpen, onClose, projectUrl, projectTitle }) => {
    const [deviceView, setDeviceView] = useState('desktop');

    if (!isOpen) return null;

    const deviceSizes = {
        mobile: { width: '375px', height: '667px', label: 'Mobile' },
        tablet: { width: '768px', height: '1024px', label: 'Tablet' },
        desktop: { width: '100%', height: '100%', label: 'Desktop' }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-[#1c1c22] rounded-lg overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div>
                        <h2 className="text-xl font-bold text-white">{projectTitle}</h2>
                        <p className="text-sm text-white/60">{projectUrl}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Device Toggle Buttons */}
                        {Object.entries(deviceSizes).map(([key, { label }]) => (
                            <Button
                                key={key}
                                onClick={() => setDeviceView(key)}
                                variant={deviceView === key ? "default" : "outline"}
                                size="sm"
                                className={`${deviceView === key ? 'bg-accent text-primary' : 'text-white/70 hover:text-white'}`}
                            >
                                {label}
                            </Button>
                        ))}
                        <Button
                            onClick={onClose}
                            variant="outline"
                            size="icon"
                            className="ml-2 text-white/70 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Preview Container */}
                <div className="flex items-center justify-center p-4 h-[calc(100%-80px)] bg-[#27272c]">
                    <div 
                        className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                            deviceView === 'desktop' ? 'w-full h-full' : ''
                        }`}
                        style={{
                            width: deviceView !== 'desktop' ? deviceSizes[deviceView].width : '100%',
                            height: deviceView !== 'desktop' ? deviceSizes[deviceView].height : '100%',
                            maxHeight: '100%'
                        }}
                    >
                        <iframe
                            src={projectUrl}
                            className="w-full h-full border-0"
                            title={`${projectTitle} Preview`}
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePreviewModal;
