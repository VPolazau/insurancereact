import { Typography } from '../../../../../../../../components';

import styles from './styles.module.css';

export const InsuranceCaseContentDescription = () => {
    return (
        <div className={styles.scrollDescription} data-testid="InsuranceCaseContentDescription">
            <div className={styles.titleDescription}>
                <Typography variant="h3">Пострадало имущество</Typography>
            </div>
            <ul className={styles.descriptionContainer}>
                <li className={styles.descriptionBlock} data-testid="list">
                    <Typography variant="h3">
                        Примите все возможные меры по предотвращению или уменьшению ущерба
                    </Typography>
                    <Typography variant="medium">
                        по спасению застрахованного имущества, если это представляется возможным
                    </Typography>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">Заявите о произошедшем в государственные органы</Typography>
                    <Typography variant="medium">
                        в компетенцию которых входит расследование произошедшего события, для принятия подтверждения
                        факта страхового случая
                    </Typography>
                    <ul className={styles.descriptionList}>
                        <li>
                            <Typography variant="medium">
                                при пожаре, ударе молнии, взрыве бытового газа, употребляемого для бытовых целей,
                                сообщить в Госпожнадзор (тел. 01), если пожар произошел в случае поджога, дополнительно
                                сообщите в МВД (тел. 02)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="medium">
                                при повреждении водой из водопроводных, канализационных, отопительных и противопожарных
                                систем сообщите в РЭУ, ЖЭК, ГРЭП или аварийную службу, имеющую разрешение на разрешение
                                на осуществление данной деятельности
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="medium">
                                при злоумышленных действиях третьих лиц, сообщите в МВД (тел. 02)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="medium">
                                при краже со взломом, грабеже сообщите в МВД (тел. 02)
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">
                        Сохраните пострадавшее имущество в том виде, в котором оно оказалось после страхового случая
                    </Typography>
                    <Typography variant="medium">
                        изменение картины убытка допустимо, если это диктуется соображениями безопасности или с
                        письменного согласия страховой компании либо по истечении двух недель после уведомления ее о
                        полученном убытке
                    </Typography>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">Обратитесь в нашу страховую компанию </Typography>
                    <Typography variant="medium">
                        не позднее 72 часов начиная с момента, когда вы узнали об убытке, известите об этом страховую
                        компанию в письменной форме (факсимильной связью, заказным письмом, с помощью курьера и т. п.)
                    </Typography>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">Предоставьте страховой компании или ее представителю</Typography>
                    <Typography variant="medium">
                        возможность проводить осмотр или обследование поврежденного имущества, расследование в отношении
                        причин и размера убытка, участвовать в мероприятиях по уменьшению убытка и спасению
                        застрахованного имущества лиц
                    </Typography>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">Сообщите страховой компании в письменном виде информацию</Typography>
                    <Typography variant="medium">
                        необходимую для суждения о произошедшем страховом случае и размере повреждений или факте гибели
                        застрахованного имущества
                    </Typography>
                </li>
                <li className={styles.descriptionBlock}>
                    <Typography variant="h3">Предъявите страховой компании пакет документов</Typography>
                    <Typography variant="medium">
                        необходимых для принятия решения о выплате страхового возмещения. Для получения дополнительной
                        информации об адресах офисов, где ведётся приём заявлений, необходимо позвонить по номеру +7
                        (495) 177 - 37 - 37
                    </Typography>
                </li>
            </ul>
        </div>
    );
};
