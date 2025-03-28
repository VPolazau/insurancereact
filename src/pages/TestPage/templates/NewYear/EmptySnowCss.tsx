import style from './EmptySnowCss.module.css';
export const EmptySnowCss = () => {
    // const isNewYearMode = process.env.REACT_APP_NEW_YEAR_MODE === 'true';
    const isNewYearMode = true;

    if (!isNewYearMode) return null;

    return (
        <div className={style.snow_block_wrapper}>
            <div className={style.snow_block}></div>
        </div>
    );
};
