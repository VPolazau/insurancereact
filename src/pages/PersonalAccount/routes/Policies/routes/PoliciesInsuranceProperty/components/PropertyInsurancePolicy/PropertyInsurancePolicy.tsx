import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { CardBody, Typography, Button, Checkbox } from '../../../../../../../../components';
import { PropertyCardPolicyTerms } from '../PropertyCardPolicyTerms';
import { PropertyCardObjectInsurance } from '../PropertyCardObjectInsurance';
import { PropertyCardPolicyholder } from '../PropertyCardPolicyholder';
import { PropertyCardPayment } from '../PropertyCardPayment';
import { ConfirmPopupPolicy } from '../ConfirmPopupPolicy';
import { ModalWindowPassword } from '../../../../../../../../components/ModalWindowPassword';

import styles from './styles.module.css';

export const PropertyInsurancePolice = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isIssuePopupOpen, setIsIssuePopupOpen] = useState(false);
    const [isStatusPopupOpen, setIsStatusPopupOpen] = useState(false);

    const isExpires = useRef(true); // TODO получать состояния с бэка
    const location = useLocation();
    const navigate = useNavigate();

    const card = location.state;

    const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const handleDownloadBtnClick = () => {
        navigate('/in-progress');
    };

    const handleIssueBtnClick = () => {
        setIsIssuePopupOpen(true);
    };

    const handleCloseIssuePopUp = () => {
        setIsIssuePopupOpen(false);
    };

    const handleConfirmClick = () => {
        setIsStatusPopupOpen(true);
        setIsIssuePopupOpen(false);
    };

    return (
        <div>
            <div className={styles.infoBlock}>
                <CardBody className={cn(styles.card, styles.infoBlockLeft)}>
                    <div className={styles.checkboxBlock}>
                        <Checkbox title="" checked={false} onChange={handleCheckboxClick} name="" />
                        <Typography variant="emphasis" className={styles.title}>
                            Договор страхования {'\n'}№ GO3456789
                        </Typography>
                    </div>
                    <Button variant="secondary" onClick={handleDownloadBtnClick} disabled={!isChecked}>
                        Скачать
                    </Button>
                </CardBody>
                <CardBody className={cn(styles.card, styles.infoBlockLeft)}>
                    <ul className={styles.list}>
                        <li>
                            <Typography variant="emphasis" className={styles.titleItem}>
                                Номер полиса
                            </Typography>
                            <Typography variant="small">{card.policyNumber}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis" className={styles.titleItem}>
                                Срок действия
                            </Typography>
                            <Typography variant="small">{card.policyValidity}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis" className={styles.titleItem}>
                                Стоимость полиса
                            </Typography>
                            <Typography variant="medium">{card.policyCost}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis" className={styles.titleItem}>
                                Сумма взноса
                            </Typography>
                            <Typography variant="medium">{card.paymentAmount}</Typography>
                        </li>
                        <li>
                            <Typography variant="emphasis">Оплата до 15 числа каждого месяца</Typography>
                        </li>
                        <li>
                            <Button
                                variant="primary"
                                className={styles.issueBtn}
                                onClick={handleIssueBtnClick}
                                disabled={isExpires.current}
                            >
                                Продлить
                                {isExpires.current && (
                                    <Typography variant="small" className={styles.issueBtnTooltiptext}>
                                        Данная функция будет активирована за 10 дней до даты окончания полиса
                                    </Typography>
                                )}
                            </Button>
                        </li>
                    </ul>
                </CardBody>
            </div>
            <div className={styles.cardBlock}>
                <PropertyCardObjectInsurance />
                <PropertyCardPolicyholder />
                <PropertyCardPolicyTerms />
                <PropertyCardPayment />
            </div>
            {isIssuePopupOpen && <ConfirmPopupPolicy onConfirm={handleConfirmClick} onCancel={handleCloseIssuePopUp} />}
            {isStatusPopupOpen && (
                <ModalWindowPassword
                    className={styles.popup}
                    textMessage="Ваша заявка на продление страхового полиса будет рассмотрена в течение 2-х рабочих дней"
                    setIsOpen={setIsStatusPopupOpen}
                />
            )}
        </div>
    );
};
