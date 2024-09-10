import clsx from 'clsx'
import {memo} from 'react'
import {HelperLinks, OtherLinks} from './Links'
import classes from './style.module.css'
import Container from "@/components/Container/Container";

function Footer() {
  return (
    <footer className={clsx(classes.footer)}>
      <Container>
        <div className="flex gap-[50px] justify-between py-3">
          <div className="flex-shrink-0">

          </div>

          <div className={classes.navigationLinks}>
            <HelperLinks/>
            <OtherLinks/>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default memo(Footer)
