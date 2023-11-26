import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './JoyKz.module.css';

interface Props {
  className?: string;
}
/* @figmaId 701:26212 */
export const JoyKz: FC<Props> = memo(function JoyKz(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.divSiteWrapper}>
        <div className={classes.mainArticle}>
          <div className={classes.section}>
            <div className={classes.divSectionBorder}>
              <div className={classes.divSectionBackground}></div>
            </div>
            <div className={classes.divYui_3_17_2_1_1691733468158_}>
              <div className={classes.divBlock230f176eb1efe104821}>
                <div className={classes.divSqsHtmlContent}>
                  <div className={classes.heading2GetBetterGrades}>get better grades… </div>
                  <div className={classes.heading2WhileStudyingLess}>while studying less.</div>
                </div>
              </div>
              <div className={classes.divBlockYui_3_17_2_1_169161746}></div>
              <div className={classes.divBlockYui_3_17_2_1_169164699}>
                <div className={classes.spanSqsrteTextColorWhite}>
                  <div className={classes.notionCertifiedCreators}>
                    <div className={classes.textBlock}>Notion </div>
                    <div className={classes.textBlock2}>Certified </div>
                    <div className={classes.textBlock3}>Creators</div>
                  </div>
                </div>
              </div>
              <div className={classes.iPhone14Pro}></div>
              <div className={classes.iPhone14Pro2}></div>
              <div className={classes.design}></div>
            </div>
          </div>
          <div className={classes.section2}>
            <div className={classes.divSectionBorder2}>
              <div className={classes.divSectionBackground2}></div>
            </div>
            <div className={classes.divYui_3_17_2_1_1691733468158_2}>
              <div className={classes.divYui_3_17_2_1_1691733468158_3}></div>
              <div className={classes.divBlockYui_3_17_2_1_1691646992}>
                <div className={classes.heading2TheStudyScheduler}>Joyonaft</div>
              </div>
              <div className={classes.divBlockYui_3_17_2_1_1691646993}></div>
              <div className={classes._118}></div>
            </div>
          </div>
        </div>
        <div className={classes.footerSection}>
          <div className={classes.divSectionBorder3}>
            <div className={classes.divSectionBackground3}></div>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.divHeaderBackgroundSolid}></div>
        <div className={classes.divHeaderBorder}></div>
        <div className={classes.link}>
          <div className={classes.skipToContent}>Skip to Content</div>
        </div>
        <div className={classes.link2}>
          <div className={classes.home}>Home</div>
        </div>
      </div>
      <div className={classes.heading2TheStudyScheduler2}>Joy</div>
    </div>
  );
});
