import React from "react";
import style from "./Forward.module.scss";

const Comment = () => {
  return (
    <div className={style.comment}>
      <p>
        Присутствует встроеная реклама. Данную рекламу встраивают релиз-группы,
        а не наш сайт. Мы не несем никакой ответственности за ее содержание. Вы
        можете посмотреть сейчас с рекламой, либо дождаться лицензии и смотреть
        уже без рекламы.
      </p>
      <div className={style.coms}>
        <input type="text" placeholder="Гость" />
        <br />
        <textarea class="form-control" id="comment" rows="3"></textarea>
        <br />

        <button>Добавить</button>
      </div>
    </div>
  );
};

export default Comment;
