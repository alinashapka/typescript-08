
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import clsx from "clsx";
import css from "./SearchBox.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface Props {
  text: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ text, onChange }: Props) {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectNameFilter);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={clsx(css.container)}>
            <p className={clsx(css.text)}>Find contacts by name</p>
            <input className={clsx(css.input)} type="text" value={filter} onChange={handleChange}></input>
        </div>
    );
};