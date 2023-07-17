import { pinyin, ch, jp, en } from "./data";
import { pinyin2, ch2, jp2, en2 } from "./data2";
import { pinyin3, ch3, jp3, en3 } from "./data3";
import { pinyin4, ch4, jp4, en4 } from "./data4";
import { pinyin5, ch5, jp5, en5 } from "./data5";
import { pinyin6, ch6, jp6, en6 } from "./data6";

type questionType = {
  jp?: string;
  ch?: string;
  pi?: string;
  en?: string;
};

export const questions: questionType[] = [];
export const questions2: questionType[] = [];
export const questions3: questionType[] = [];
export const questions4: questionType[] = [];
export const questions5: questionType[] = [];
export const questions6: questionType[] = [];

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

for (let i = 0; i < pinyin5.length; i++) {
  questions5.push({ jp: jp5[i], ch: ch5[i], pi: pinyin5[i], en: en5[i] });
}

for (let i = 0; i < pinyin6.length; i++) {
  questions6.push({ jp: jp6[i], ch: ch6[i], pi: pinyin6[i], en: en6[i] });
}
