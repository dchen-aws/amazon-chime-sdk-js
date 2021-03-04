// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export interface Disposable {
  dispose(): Promise<void>;
}

export function isDisposable(x: any): x is Disposable {
  return x && 'dispose' in x;
}

export default Disposable;