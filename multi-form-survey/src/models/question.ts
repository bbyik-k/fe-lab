// question -> question을 갖는 section -> section을 갖는 survey 까지 확장

import { makeAutoObservable } from 'mobx';
import type { QuestionType } from '../types';

// question type 정리
type QuestionData = {
  id: number; //time stamp 사용
  title: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
};

export default class Question implements QuestionData {
  id: number; //time stamp 사용
  title: string;
  type: QuestionType;
  required: boolean;
  options?: string[];

  constructor(
    data: QuestionData = {
      id: Date.now(),
      title: '',
      type: 'shortText',
      required: false,
    }
  ) {
    makeAutoObservable(this); // observable 로 mobX와 연동하기 - makeAutoObservable util 사용
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.required = data.required;
    this.options = data.options;
  }

  // Action 정의: 각각 상태 변경 메서드
  setTitle(title: string) {
    this.title = title;
  }

  setType(type: QuestionType) {
    this.type = type;

    if (type === 'multipleChoice' || type === 'dropdown' || type === 'checkbox') {
      this.options = this.options ?? [''];
    } else {
      this.options = undefined;
    }
  }

  setRequired(required: boolean) {
    this.required = required;
  }

  setOptions(options: string[]) {
    this.options = options;
  }

  // ToDo: 옵션 전체를 설정하지 않고, 하나의 옵션을 변경할 수 있도록 하는 메서드 추가할 것
}
