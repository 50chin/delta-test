import { useState } from "react";
import s from "./TableList.module.scss";
import { Charts } from "../Charts/Charts";
import { use } from "react";

export const TableList = ({ data }) => {
  const [isCharts, setIsCharts] = useState(false);
  const [title, setTitle] = useState("");
  const percent = Math.round((data.currentDay / data.yesterday) * 100 - 100);

  const currentDayToString = data.currentDay.toLocaleString("ru-RU");
  const yesterdayToString = data.yesterday.toLocaleString("ru-RU");
  const dayWeekToString = data.dayWeek.toLocaleString("ru-RU");

  const handleOpenCharts = (data) => {
    setIsCharts((prevState) => !prevState);
    setTitle(data.name);
  };

  return (
    <>
      <tr className={s.table__list} onClick={() => handleOpenCharts(data)}>
        <td className={s.table__name}>{data.name}</td>
        <td className={s.table__currentDay}>{currentDayToString}</td>
        <td
          className={s.table__yesterday}
          style={{
            backgroundColor:
              percent > 0 ? "#edf7e7" : percent < 0 ? "#ffe6e7" : "",
          }}
        >
          {yesterdayToString}
          <span
            style={{
              color: percent < 0 ? "#ff4f56" : "",
            }}
          >
            {percent}%
          </span>
        </td>
        <td
          className={s.table__dayWeek}
          style={{
            backgroundColor:
              data.dayWeek < data.currentDay
                ? "#edf7e7"
                : data.dayWeek > data.currentDay
                ? "#ffe6e7"
                : "",
          }}
        >
          {dayWeekToString}
        </td>
      </tr>
      {isCharts && (
        <tr>
          <td colSpan={4}>
            <Charts title={title} />
          </td>
        </tr>
      )}
    </>
  );
};
