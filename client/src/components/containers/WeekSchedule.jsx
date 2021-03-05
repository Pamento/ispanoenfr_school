import React from "react";
import "../../containers.css"
import { useTranslation } from 'react-i18next'
import DAY from '../Day';

export default function WeekSchedule() {
  const { t } = useTranslation();
  const sBold = t('home.typical.day-span');

  return (
    <div className="WeekContainer">
      <DAY
        title={t('home.typical.day-5-1')}
        message1={t('home.typical.day-5-1-description-p1')}
        spanBold={sBold}
        message2={t('home.typical.day-5-1-description-p2')}
        color="pink"
      />
      <DAY
        title={t('home.typical.day-5-2')}
        message1={t('home.typical.day-5-2-description-p1')}
        spanBold={sBold}
        message2={t('home.typical.day-5-2-description-p2')}
        color="pinkLight"
      />
      <DAY
        title={t('home.typical.day-5-3')}
        message1={t('home.typical.day-5-3-description-p1')}
        spanBold={sBold}
        message2={t('home.typical.day-5-3-description-p2')}
        color="yellow"
      />
      <DAY
        title={t('home.typical.day-5-4')}
        message1={t('home.typical.day-5-4-description-p1')}
        spanBold={sBold}
        message2={t('home.typical.day-5-4-description-p2')}
        color="blueLight"
      />
      <DAY
        title={t('home.typical.day-5-5')}
        message1={t('home.typical.day-5-5-description-p1')}
        spanBold={sBold}
        message2={t('home.typical.day-5-5-description-p2')}
        color="blueNavy"
      />
    </div>
  );
}
