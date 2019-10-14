/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
// 分别代表了不同的 JSX 类型
export type WorkTag =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
// 代表React中不同类型的fiber节点。
export const FunctionComponent = 0;
export const ClassComponent = 1;// 就是应用层面的React组件。ClassComponent是一个继承自React.Component的类的实例
export const IndeterminateComponent = 2; // Before we know whether it is function or class
export const HostRoot = 3; // ReactDOM.render()时的根节点 Root of a host tree. Could be nested inside another node.
export const HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
// HostComponent是 React中最常见的抽象节点，是ClassComponent的组成部分。具体的实现取决于React运行的平台。
// 在浏览器环境下就代表DOM节点，例如：span，div等，可以理解为所谓的虚拟DOM节点。HostComponent中的Host就代码这种组件的具体操作逻辑是由Host环境注入的。
export const HostComponent = 5;
export const HostText = 6;
export const Fragment = 7;
export const Mode = 8;
export const ContextConsumer = 9;
export const ContextProvider = 10;
export const ForwardRef = 11;
export const Profiler = 12;
export const SuspenseComponent = 13;
export const MemoComponent = 14;
export const SimpleMemoComponent = 15;
export const LazyComponent = 16;
export const IncompleteClassComponent = 17;
export const DehydratedSuspenseComponent = 18;
export const EventComponent = 19;
export const EventTarget = 20;
