import { Container } from "../Container/Container";
import { TableList } from "../TableList/TableList";
import { tableData } from "./data";
import s from "./Table.module.scss";

export const Table = ({}) => {
  return (
    <div className={s.table}>
      <Container>
        <table className={s.table__wrapper}>
          <thead>
            <tr>
              <th className={s.table__name}>Показатель</th>
              <th className={s.table__currentDay}>Текущий день</th>
              <th className={s.table__yesterday}>Вчера</th>
              <th className={s.table__dayWeek}>Этот день недели</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((el) => (
              <TableList key={el.id} data={el} />
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
