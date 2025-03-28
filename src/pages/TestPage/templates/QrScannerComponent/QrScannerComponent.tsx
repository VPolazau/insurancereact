import React, { useEffect, useMemo, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

import { Button } from '../../../../components';

const QrScannerComponent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const qrScannerRef = useRef<QrScanner | null>(null);
    const [isScanFile, setIsScanFile] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [scanCount, setScanCount] = useState(0); // Счётчик сканирований
    const [lastResult, setLastResult] = useState<QrScanner.ScanResult | null>(null);
    const maxScans = 2; // Обрабатывать QR-код каждые 2 сканирований
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const overlayRef = useRef(null);
    const [resultFileScan, setResultFileScan] = useState('');

    useEffect(() => {
        if (!isScanFile && videoRef.current && overlayRef.current) {
            qrScannerRef.current = new QrScanner(
                videoRef.current,
                (result) => {
                    setLastResult(result);
                    setScanCount((prevCount) => prevCount + 1);
                },
                {
                    onDecodeError: () => setScanCount(0),
                    calculateScanRegion: (video) => ({
                        x: 0,
                        y: 0,
                        width: video.videoWidth,
                        height: video.videoHeight,
                        downScaledWidth: video.videoWidth,
                        downScaledHeight: video.videoHeight,
                    }),
                    highlightScanRegion: true,
                    highlightCodeOutline: true,
                    overlay: overlayRef.current,
                }
            );

            qrScannerRef.current
                .start()
                .then(() => setErrorMessage(null))
                .catch((error) => {
                    if (error.name === 'AbortError') {
                        setErrorMessage('Camera access was aborted. Please grant camera permissions.');
                    } else {
                        setErrorMessage(`An error occurred: ${error.message}`);
                    }
                });

            // Остановка сканера при размонтировании компонента
            return () => {
                qrScannerRef.current?.stop();
            };
        }
    }, [isScanFile]);

    useEffect(() => {
        if (scanCount >= maxScans && lastResult) {
            console.log('decoded qr code:', lastResult);
            alert(`QR code content: ${lastResult.data}`);
            setScanCount(0); // Сброс счётчика после обработки QR-кода
            setLastResult(null);
        }
    }, [scanCount, lastResult]);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const fileUrl: string = URL.createObjectURL(file);
        setImageSrc(fileUrl);

        // Останавливаем сканер перед сканированием файла
        // qrScannerRef.current?.stop();
        setTimeout(async () => {
            try {
                console.log('file before', file);
                const result = await QrScanner.scanImage(file, {
                    returnDetailedScanResult: true,
                });
                setResultFileScan(result.data);
                console.log('result', result);
            } catch (error) {
                console.error('Error', error);
            } finally {
                // Перезапускаем сканер
                setIsScanFile(false);
                setImageSrc(null);
                // qrScannerRef.current?.start();
            }
        }, 1500);
    };

    const handleScanFile = () => {
        setIsScanFile(true);
        fileInputRef.current?.click();
    };

    return (
        <div>
            <h1>QR Scanner</h1>
            {scanCount !== 0 ? <span>Loading...</span> : <span>work</span>}
            <div
                className="camera-wrapper"
                style={{ width: '500px', height: '500px', backgroundColor: errorMessage ? 'gray' : undefined }}
            >
                {isScanFile && imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Uploaded"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                ) : (
                    <>
                        <video ref={videoRef} style={{ width: '100%' }} />
                        <div ref={overlayRef} style={{ display: 'none' }} />
                    </>
                )}
            </div>
            <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.svg,.gif"
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: 'none' }}
            />
            <Button onClick={handleScanFile}>Сканировать из файла</Button>
            <div>result: {resultFileScan}</div>
        </div>
    );
};

export default QrScannerComponent;
