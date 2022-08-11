import { createSlice } from '@reduxjs/toolkit'
import { ChainId } from '@shapeshiftoss/caip'
import { BIP44Params } from '@shapeshiftoss/types'
import isEqual from 'lodash/isEqual'
import { logger } from 'lib/logger'
import { AccountSpecifier } from 'state/slices/portfolioSlice/portfolioSliceCommon'

const moduleLogger = logger.child({ namespace: ['accountSpecifiersSlice'] })

// an account specifier is an x/y/zpub, or eth public key
// as consumed by unchained, note this is *not* an AccountId
// as we're dealing with unchained accounts, not addresses

export type AccountSpecifier = string // this was wrong - it's a map between a chain id, and a public key (xpub/ypub/zpub/ltub/etc...)
export type AccountSpecifierMap = Record<ChainId, AccountSpecifier>

/**
 * when we set these accountspecifiers, we have extra information that we essentially throw away
 * i.e. we know the accountNumber used to derive the accountSpecifier, but we never store it
 * keeping this map of the derived accountSpecifier -> bip44params used to derive it, will allow us to retrieve this information
 * at runtime, e.g. the accountNumber
 *
 * this is just a first brain dump of one strategy
 * we probably also need to consider relying on ordering of the accountSpecifiers in terms of account number
 */
export type AccountSpecifiersMetadata = {
  [accountSpecifier: AccountSpecifier]: BIP44Params
}

/**
 * future optimization idea
 *
 * the first time we autodetect accounts, we will have to iterate, calling getAccount to unchained until we hit a zero balance account
 * note this assumption isn't strictly true, but probably good enough for 99% of ux cases, i.e. a user could skip account 1 and go straight to 2, but fuck them
 *
 * we could either
 * - serially request unchained until we hit a zero balance account
 * - batch a handful of requests to unchained, e.g. derive and batch request 5? accounts at a time and then update the state
 * - always start with the accountSpecifier for accountNumber 0, and once we've determined which is the first zero-balance account, store a 1:many map
 *   of additional (accountNumber > 0) accounts related to that first account, then on future page loads we can look up known accounts that have
 *   been previously autodetected and fetch them in parallel
 */

type AccountSpecifierState = {
  accountSpecifiers: AccountSpecifierMap[]
  accountSpecifiersMetadata: AccountSpecifiersMetadata[]
}

const getInitialState = (): AccountSpecifierState => ({
  accountSpecifiers: [],
  accountSpecifiersMetadata: [],
})

export const accountSpecifiers = createSlice({
  name: 'accountSpecifiers',
  initialState: getInitialState(),
  reducers: {
    clear: () => {
      moduleLogger.info('clearing account specifiers')
      return getInitialState()
    },
    setAccountSpecifiers(state, { payload }: { payload: AccountSpecifierMap[] }) {
      // don't set to exactly the same thing and cause renders
      if (isEqual(state.accountSpecifiers, payload)) return
      moduleLogger.info('dispatching account specifiers set action')
      state.accountSpecifiers = payload
    },
  },
})
