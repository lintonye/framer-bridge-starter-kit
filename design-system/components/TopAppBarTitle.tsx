
import * as React from "react"
import { TopAppBarTitle as _TopAppBarTitle} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  title?: string
}

// Component
export const TopAppBarTitle: React.FC<Props> = ({
  title,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBarTitle>
      {title}
    </_TopAppBarTitle>
    </FramerXWrapper>
)