/* eslint-disable prettier/prettier */
import { Tx } from 'state/slices/txHistorySlice/txHistorySlice'

export const skipCosmosTx = (tx: Tx) => tx.data?.parser === 'cosmos' && (tx?.data.method === 'delegate' || tx?.data.method === 'begin_unbonding')