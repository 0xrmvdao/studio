/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface VvsRewarderInterface extends utils.Interface {
  functions: {
    'add(uint256,uint256,bool)': FunctionFragment;
    'craftsman()': FunctionFragment;
    'craftsmanV2()': FunctionFragment;
    'emergencyRewardWithdraw(uint256)': FunctionFragment;
    'massUpdatePools()': FunctionFragment;
    'onVVSReward(uint256,address,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingToken(uint256,address)': FunctionFragment;
    'poolIds(uint256)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardEndTimestamp()': FunctionFragment;
    'rewardPerSecond()': FunctionFragment;
    'rewardStartTimestamp()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'set(uint256,uint256,bool)': FunctionFragment;
    'setRewardEndTimestamp(uint256)': FunctionFragment;
    'setRewardPerSecond(uint256)': FunctionFragment;
    'setRewardStartTimestamp(uint256)': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'add'
      | 'craftsman'
      | 'craftsmanV2'
      | 'emergencyRewardWithdraw'
      | 'massUpdatePools'
      | 'onVVSReward'
      | 'owner'
      | 'pendingToken'
      | 'poolIds'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'rewardEndTimestamp'
      | 'rewardPerSecond'
      | 'rewardStartTimestamp'
      | 'rewardToken'
      | 'set'
      | 'setRewardEndTimestamp'
      | 'setRewardPerSecond'
      | 'setRewardStartTimestamp'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'updatePool'
      | 'userInfo',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'add', values: [BigNumberish, BigNumberish, boolean]): string;
  encodeFunctionData(functionFragment: 'craftsman', values?: undefined): string;
  encodeFunctionData(functionFragment: 'craftsmanV2', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyRewardWithdraw', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string;
  encodeFunctionData(functionFragment: 'onVVSReward', values: [BigNumberish, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingToken', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'poolIds', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardEndTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardStartTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'set', values: [BigNumberish, BigNumberish, boolean]): string;
  encodeFunctionData(functionFragment: 'setRewardEndTimestamp', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setRewardPerSecond', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setRewardStartTimestamp', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [BigNumberish, string]): string;

  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'craftsman', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'craftsmanV2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyRewardWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onVVSReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolIds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardEndTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardStartTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardEndTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardStartTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;

  events: {
    'AddPool(uint256,uint256)': EventFragment;
    'EmergencyRewardWithdraw(address,uint256)': EventFragment;
    'OnVVSReward(uint256,address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SetPool(uint256,uint256)': EventFragment;
    'SetRewardEndTimestamp(uint256)': EventFragment;
    'SetRewardPerSecond(uint256)': EventFragment;
    'SetRewardStartTimestamp(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyRewardWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OnVVSReward'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetRewardEndTimestamp'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetRewardPerSecond'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetRewardStartTimestamp'): EventFragment;
}

export interface AddPoolEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
}
export type AddPoolEvent = TypedEvent<[BigNumber, BigNumber], AddPoolEventObject>;

export type AddPoolEventFilter = TypedEventFilter<AddPoolEvent>;

export interface EmergencyRewardWithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type EmergencyRewardWithdrawEvent = TypedEvent<[string, BigNumber], EmergencyRewardWithdrawEventObject>;

export type EmergencyRewardWithdrawEventFilter = TypedEventFilter<EmergencyRewardWithdrawEvent>;

export interface OnVVSRewardEventObject {
  pid: BigNumber;
  user: string;
  amount: BigNumber;
  pending: BigNumber;
}
export type OnVVSRewardEvent = TypedEvent<[BigNumber, string, BigNumber, BigNumber], OnVVSRewardEventObject>;

export type OnVVSRewardEventFilter = TypedEventFilter<OnVVSRewardEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetPoolEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
}
export type SetPoolEvent = TypedEvent<[BigNumber, BigNumber], SetPoolEventObject>;

export type SetPoolEventFilter = TypedEventFilter<SetPoolEvent>;

export interface SetRewardEndTimestampEventObject {
  rewardEndTimestamp: BigNumber;
}
export type SetRewardEndTimestampEvent = TypedEvent<[BigNumber], SetRewardEndTimestampEventObject>;

export type SetRewardEndTimestampEventFilter = TypedEventFilter<SetRewardEndTimestampEvent>;

export interface SetRewardPerSecondEventObject {
  rewardPerSecond: BigNumber;
}
export type SetRewardPerSecondEvent = TypedEvent<[BigNumber], SetRewardPerSecondEventObject>;

export type SetRewardPerSecondEventFilter = TypedEventFilter<SetRewardPerSecondEvent>;

export interface SetRewardStartTimestampEventObject {
  rewardStartTimestamp: BigNumber;
}
export type SetRewardStartTimestampEvent = TypedEvent<[BigNumber], SetRewardStartTimestampEventObject>;

export type SetRewardStartTimestampEventFilter = TypedEventFilter<SetRewardStartTimestampEvent>;

export interface VvsRewarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VvsRewarderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(
      _allocPoint: BigNumberish,
      _pid: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    craftsman(overrides?: CallOverrides): Promise<[string]>;

    craftsmanV2(overrides?: CallOverrides): Promise<[string]>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    onVVSReward(
      _pid: BigNumberish,
      _user: string,
      _currentAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingToken(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber] & { pools: BigNumber }>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rewardEndTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardStartTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRewardEndTimestamp(
      _rewardEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRewardStartTimestamp(
      _rewardStartTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { rewardDebt: BigNumber }>;
  };

  add(
    _allocPoint: BigNumberish,
    _pid: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  craftsman(overrides?: CallOverrides): Promise<string>;

  craftsmanV2(overrides?: CallOverrides): Promise<string>;

  emergencyRewardWithdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  onVVSReward(
    _pid: BigNumberish,
    _user: string,
    _currentAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingToken(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;

  poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      allocPoint: BigNumber;
      lastRewardTime: BigNumber;
      accRewardPerShare: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  rewardEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  rewardStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRewardEndTimestamp(
    _rewardEndTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRewardPerSecond(
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRewardStartTimestamp(
    _rewardStartTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    add(_allocPoint: BigNumberish, _pid: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;

    craftsman(overrides?: CallOverrides): Promise<string>;

    craftsmanV2(overrides?: CallOverrides): Promise<string>;

    emergencyRewardWithdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    onVVSReward(
      _pid: BigNumberish,
      _user: string,
      _currentAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingToken(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[string, BigNumber]>;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accRewardPerShare: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewardStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    set(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>;

    setRewardEndTimestamp(_rewardEndTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRewardPerSecond(_rewardPerSecond: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRewardStartTimestamp(_rewardStartTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'AddPool(uint256,uint256)'(pid?: BigNumberish | null, allocPoint?: null): AddPoolEventFilter;
    AddPool(pid?: BigNumberish | null, allocPoint?: null): AddPoolEventFilter;

    'EmergencyRewardWithdraw(address,uint256)'(user?: string | null, amount?: null): EmergencyRewardWithdrawEventFilter;
    EmergencyRewardWithdraw(user?: string | null, amount?: null): EmergencyRewardWithdrawEventFilter;

    'OnVVSReward(uint256,address,uint256,uint256)'(
      pid?: BigNumberish | null,
      user?: string | null,
      amount?: null,
      pending?: null,
    ): OnVVSRewardEventFilter;
    OnVVSReward(pid?: BigNumberish | null, user?: string | null, amount?: null, pending?: null): OnVVSRewardEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'SetPool(uint256,uint256)'(pid?: BigNumberish | null, allocPoint?: null): SetPoolEventFilter;
    SetPool(pid?: BigNumberish | null, allocPoint?: null): SetPoolEventFilter;

    'SetRewardEndTimestamp(uint256)'(rewardEndTimestamp?: null): SetRewardEndTimestampEventFilter;
    SetRewardEndTimestamp(rewardEndTimestamp?: null): SetRewardEndTimestampEventFilter;

    'SetRewardPerSecond(uint256)'(rewardPerSecond?: null): SetRewardPerSecondEventFilter;
    SetRewardPerSecond(rewardPerSecond?: null): SetRewardPerSecondEventFilter;

    'SetRewardStartTimestamp(uint256)'(rewardStartTimestamp?: null): SetRewardStartTimestampEventFilter;
    SetRewardStartTimestamp(rewardStartTimestamp?: null): SetRewardStartTimestampEventFilter;
  };

  estimateGas: {
    add(
      _allocPoint: BigNumberish,
      _pid: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    craftsman(overrides?: CallOverrides): Promise<BigNumber>;

    craftsmanV2(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    onVVSReward(
      _pid: BigNumberish,
      _user: string,
      _currentAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingToken(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    rewardEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewardStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setRewardEndTimestamp(
      _rewardEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setRewardStartTimestamp(
      _rewardStartTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _allocPoint: BigNumberish,
      _pid: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    craftsman(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    craftsmanV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    onVVSReward(
      _pid: BigNumberish,
      _user: string,
      _currentAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingToken(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    rewardEndTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardStartTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRewardEndTimestamp(
      _rewardEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRewardStartTimestamp(
      _rewardStartTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}