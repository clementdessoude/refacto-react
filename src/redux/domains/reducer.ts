import { DomainsState, DomainsAction, RECEIVE_DOMAINS } from './types'

const initialState: DomainsState = []

export function domainsReducer(
  state = initialState,
  action: DomainsAction
): DomainsState {
  return action.type === RECEIVE_DOMAINS ? action.domains : state
}

export default domainsReducer
