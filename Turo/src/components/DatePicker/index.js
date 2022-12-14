import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`

    const App = () => (
        <Space direction="vertical" size={12}>
          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
          <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
          <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
          <RangePicker
            defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
        </Space>
      );
      export default App;