import * as React from "react"
import { DataTableHeadCell as _DataTableHeadCell} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  alignEnd?: string;
  alignMiddle?: boolean;
  alignStart?: boolean;
  children?: string;
  onSortChange?: string;
  sort?: number;

  text?: string;
}

// Component
export const DataTableHeadCell: React.FC<Props> = ({
  alignEnd,
  alignMiddle,
  alignStart,
  children,
  onSortChange,
  sort,

  text,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_DataTableHeadCell 
      alignEnd={alignEnd}
      alignMiddle={alignMiddle}
      alignStart={alignStart}
      children={children}
      onSortChange={onSortChange}
      sort={sort}
      {...rest} >

      {text}
      </_DataTableHeadCell>
    </FramerXWrapper>
)