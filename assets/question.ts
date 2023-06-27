import { pinyin, ch, jp, en } from "./data";
import { pinyin2, ch2, jp2, en2 } from "./data2";

type questionType = {
  jp?: string;
  ch?: string;
  pi?: string;
  en?: string;
};

// export const roadQuestions: questionType[] = [];
// export const roadQuestions2: questionType[] = [];
// export const roadQuestions3: questionType[] = [];
// export const roadQuestions4: questionType[] = [];

export const questions: questionType[] = [];
export const questions2: questionType[] = [];

for (let i = 0; i < pinyin.length; i++) {
  questions.push({ jp: jp[i], ch: ch[i], pi: pinyin[i], en: en[i] });
}

for (let i = 0; i < pinyin2.length; i++) {
  questions2.push({ jp: jp2[i], ch: ch2[i], pi: pinyin2[i], en: en2[i] });
}
