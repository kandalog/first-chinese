import { pinyin, ch, jp, en } from "./data";
import { pinyin2, ch2, jp2, en2 } from "./data2";
import { pinyin3, ch3, jp3, en3 } from "./data3";
import { pinyin4, ch4, jp4, en4 } from "./data4";

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
export const questions3: questionType[] = [];
export const questions4: questionType[] = [];

for (let i = 0; i < pinyin.length; i++) {
  questions.push({ jp: jp[i], ch: ch[i], pi: pinyin[i], en: en[i] });
}

for (let i = 0; i < pinyin2.length; i++) {
  questions2.push({ jp: jp2[i], ch: ch2[i], pi: pinyin2[i], en: en2[i] });
}

for (let i = 0; i < pinyin3.length; i++) {
  questions3.push({ jp: jp3[i], ch: ch3[i], pi: pinyin3[i], en: en3[i] });
}

for (let i = 0; i < pinyin4.length; i++) {
  questions4.push({ jp: jp4[i], ch: ch4[i], pi: pinyin4[i], en: en4[i] });
}
