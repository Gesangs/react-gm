import { EventEmitter } from 'gm-util'

const GMEVENT = 'GM_EVENT_'

const Emitter = new EventEmitter()

const TYPE = {
  DRAWER_SHOW: GMEVENT + 'DRAWER_SHOW',
  DRAWER_HIDE: GMEVENT + 'DRAWER_HIDE',
  MODAL_SHOW: GMEVENT + 'MODAL_SHOW',
  MODAL_HIDE: GMEVENT + 'MODAL_HIDE',
  DRAWER_SCROLL: GMEVENT + 'DRAWER_SCROLL',
  MODAL_SCROLL: GMEVENT + 'MODAL_SCROLL',
  BROWSER_SCROLL: GMEVENT + 'BROWSER_SCROLL',
  FULLLOADING_SHOW: GMEVENT + 'FULLLOADING_SHOW',
  FULLLOADING_HIDE: GMEVENT + 'FULLLOADING_HIDE',
  TITLE_CHANGE: GMEVENT + 'TITLE_CHANGE'
}

Emitter.TYPE = TYPE

export default Emitter
