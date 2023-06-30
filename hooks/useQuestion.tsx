import {
  questions as materialQuestion,
  questions2,
  questions3,
  questions4,
} from "@/assets/question";
import { useState } from "react";

export const useQuestion = () => {
  const [questions, setQuestions] = useState(materialQuestion);

  // データを押した時の処理
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.nextElementSibling;
    target && target.classList.toggle("active");
  };

  // 消す時の処理
  const removeActiveClass = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("active");
  };

  // シャッフルボタン
  const shuffleButton = () => {
    setQuestions((prevState) => shuffle([...prevState]));
  };

  // 漢字を問題として表示する
  const reverseQuestion = () => {
    // ピンインモードの場合は起動させない
    if (!questions[0].en) return;
    setQuestions((prevState) => {
      const newState = prevState.map((data) => {
        return {
          jp: data.jp,
          ch: data.pi,
          pi: data.ch,
          en: data.en,
        };
      });
      return newState;
    });
  };

  // ピンインモード
  const pin = () => {
    // 既にピンインモードの場合は処理しない
    if (!questions[0].en) return;
    // setQuestions(materialQuestion);
    setQuestions((prevState) => {
      const newState = prevState.map((data) => {
        return {
          ch: data.pi,
          pi: data.en,
        };
      });
      return newState;
    });
  };

  // 日本語モード
  const japaneseMode = () => {
    // ピンインモードの場合は起動させない
    if (!questions[0].en) return;
    setQuestions((prevState) => {
      let i = 0;
      const newState = prevState.map((data) => {
        i++;
        return {
          jp: data.pi,
          ch: data.ch,
          pi: data.jp,
          en: data.ch,
        };
      });
      return newState;
    });
  };

  // reset
  const reset = () => {
    setQuestions(materialQuestion);
  };

  // ページ番号に応じた問題に切り替える
  const changeQuestion = (num: number) => {
    let result;

    switch (num) {
      case 1:
        result = materialQuestion;
        break;
      case 2:
        result = questions2;
        break;
      case 3:
        result = questions3;
        break;
      case 4:
        result = questions4;
        break;
      default:
        alert("存在しないページ番号です");
        return;
    }

    setQuestions(result);
  };

  return {
    handleOnClick,
    removeActiveClass,
    questions,
    setQuestions,
    shuffleButton,
    reverseQuestion,
    pin,
    reset,
    changeQuestion,
    japaneseMode,
  };
};

// シュッフル機能
function shuffle(a: any) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
