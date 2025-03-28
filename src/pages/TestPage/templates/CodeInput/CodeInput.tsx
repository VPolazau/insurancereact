import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ReactCodeInput from 'react-code-input';
import { Button, ModalWindow, Typography } from '../../../../components';

const defaultInputStyles = {
    width: '70px',
    height: '56px',
    fontSize: '40px',
    fontFamily: 'monospace',
    margin: '4px',
    borderRadius: 'ópx',
    padding: '8px',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid gray',
    boxShadow: 'black Оpx Opx 10px Ор',
};

const invalidInputStyles = {
    color: 'red',
    border: 'red',
};
export const CodeInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [permittedCode, setPermittedCode] = useState('');
    const [lastChangeTime, setLastChangeTime] = useState<number>(Date.now());
    const [key, setKey] = useState(0);

    useEffect(() => {
        if (permittedCode.length) {
            setTimeout(() => setIsOpenModal(true), 1000);
        }
    }, [permittedCode]);

    const handleGivePermission = () => {
        if (permittedCode.length) {
            setIsOpenModal(false);
            onChange(permittedCode);
            setPermittedCode('');
        }
    };

    const handleForbid = () => {
        setIsOpenModal(false);
        setPermittedCode('');
    };

    const handleClear = () => {
        onChange('');
        setKey((prevKey) => prevKey + 1); // Change key for clear inputs
    };

    const handleChange = (code: string) => {
        const currentTime = Date.now();

        if (code.length === 4) {
            const timeDifference = currentTime - lastChangeTime;

            // Если разница во времени между вводом первого символа и последнего меньше 300ms, считаем, что это автозаполнение
            if (timeDifference < 300) {
                setPermittedCode(code);
                handleClear();
                return;
            }
        }

        // Обновляем время после ввода первого символа
        if (code.length === 1) {
            setLastChangeTime(currentTime);
        }
        onChange(code);
    };

    return (
        <>
            <input
                className={styles.otpCode_hidden}
                name="one-time-code"
                type="number"
                inputMode="numeric"
                pattern="[0-9]{4}"
                autoComplete="one-time-code"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            <ReactCodeInput
                key={key}
                name="otp-code"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{4}"
                fields={4}
                value={value}
                filterChars={['+', '-', '.', ',', 'e', 'E', 'ё', 'Ё', 'б', 'ю']} // black list
                filterCharsIsWhitelist={false}
                placeholder="opt code"
                onChange={handleChange}
                inputStyle={{ ...defaultInputStyles }}
                inputStyleInvalid={{ ...defaultInputStyles, ...invalidInputStyles }}
            />
            {isOpenModal && (
                <ModalWindow setIsOpen={setIsOpenModal}>
                    <>
                        <Typography variant={'h3'}>Разрешите сайту «Интернет-банк УБРиР» ввести код из SMS?</Typography>
                        <br />
                        <Button onClick={handleForbid}>Отклонить</Button>
                        <Button onClick={handleGivePermission}>Разрешить</Button>
                    </>
                </ModalWindow>
            )}
        </>
    );
};
