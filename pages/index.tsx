import { questions } from "@/assets/question";
import styled from "@/styles/Home.module.scss";
import { useQuestion } from "../hooks/useQuestion";
import { Button } from "@/components/Button";
import { Introduction } from "@/components/Introduction";

export default function Home() {
  // 各種機能をカスタムフックから取得
  const {
    handleOnClick,
    removeActiveClass,
    questions,
    shuffleButton,
    reverseQuestion,
    pin,
    reset,
    changeQuestion,
    japaneseMode,
  } = useQuestion();

  const introductionHandler = () => {
    const target = document.getElementById("introduction")!;
    const introButton = document.getElementById("introButton")!;
    console.log(target);
    target.classList.toggle("active");
    introButton.classList.toggle("active");
  };

  return (
    <>
      <Introduction />
      <header className={styled.header}>
        <Button text="I" name={"reset"} onClick={reset} />
        <Button text="R" name={"reverse"} onClick={reverseQuestion} />
        <Button text="J" name={"japanese"} onClick={japaneseMode} />
        <Button text="P" name={"pin"} onClick={pin} />
        <Button text="S" name={"shuffle"} onClick={shuffleButton} />

        {/* 説明文表示・非表示 */}
        <button
          id="introButton"
          className={styled.introduction}
          onClick={introductionHandler}
        >
          x
        </button>
      </header>

      <div className={styled.inner}>
        {/* changeボタン */}
        <Button text="1" name={"first"} onClick={() => changeQuestion(1)} />
        <Button text="2" name={"second"} onClick={() => changeQuestion(2)} />
        <Button text="3" name={"third"} onClick={() => changeQuestion(3)} />
        <Button text="4" name={"forth"} onClick={() => changeQuestion(4)} />

        {questions.map((question) => (
          <div key={question.pi} className={styled.question}>
            <p onClick={(e) => handleOnClick(e)}>{question.jp}</p>
            <div
              className={styled.hidden}
              onClick={(e) => removeActiveClass(e)}
            >
              <p>
                {question.ch && "CH:"} {question.ch}
              </p>
              <p>
                {question.jp && "PI:"} {question.pi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
