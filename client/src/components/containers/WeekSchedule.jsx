import React from "react";
import "../../containers.css"
import { useTranslation } from 'react-i18next'
import DAY from '../Day';

export default function WeekSchedule() {
  const { t } = useTranslation();
  return (
    <div className="WeekContainer">
      <DAY
        title={t('home.typical.day-1')}
        message={t('home.typical.day-1-description')}
        color="pink"
      />
      <DAY
        title={t('home.typical.day-2')}
        message={t('home.typical.day-2-description')}
        color="pinkLight"
      />
      <DAY
        title={t('home.typical.day-3')}
        message={t('home.typical.day-3-description')}
        color="yellow"
      />
      <DAY
        title={t('home.typical.day-4')}
        message={t('home.typical.day-4-description')}
        color="blueLight"
      />
      <DAY
        title={t('home.typical.day-5')}
        message={t('home.typical.day-5-description')}
        color="blueNavy"
      />
    </div>
  );
}
