import { FileUpload, Radio, Select, TextInput } from "@repo/ui";

import { useState } from "react";
import Label from "../components/Label";
import { form, section } from "./style.css";

const RequiredStage = () => {
  const [religion, setReligion] = useState("");
  const [isOpenReligion, setIsOpenReligion] = useState(false);
  const [smoke, setSmoke] = useState<boolean | undefined>(undefined);

  const religionList = ["없음", "기독교", "불교", "천주교", "기타"];
  const handleChange = (value: string | number) => {
    setReligion(value as string);
  };
  const handleClickReligion = () => {
    setIsOpenReligion((prev) => !prev);
  };

  const handleChangeSmoke = () => {
    setSmoke((prev) => !prev);
  };
  return (
    <form className={form}>
      <section className={section}>
        <Label>직업</Label>
        <TextInput placeholder="직업을 입력해주세요" width="100%" />
        <Label>종교</Label>
        <Select
          placeholder="종교를 선택해주세요"
          optionList={religionList}
          value={religion}
          onChangeValue={handleChange}
          onClickInput={handleClickReligion}
          onClickClose={() => setIsOpenReligion(false)}
          isOpen={isOpenReligion}
          width="100%"
        />
        <Label>키 (cm)</Label>
        <TextInput
          placeholder="숫자만 입력해주세요"
          type="number"
          width="100%"
        />
        <Label>흡연 여부</Label>
        <div>
          <Radio
            checked={smoke}
            onChange={handleChangeSmoke}
            label="비흡연"
            value="비흡연"
          ></Radio>
          <Radio
            checked={smoke}
            onChange={handleChangeSmoke}
            label="흡연"
            value="흡연"
          ></Radio>
        </div>
      </section>
      <section className={section}>
        <Label>취미</Label>
        <TextInput placeholder="자유롭게 입력해주세요" width="100%" />
        <Label>프로필 사진 (최대 5장)</Label>
        <FileUpload />
        {/* 프리뷰 아이템 */}
      </section>
    </form>
  );
};

export default RequiredStage;
