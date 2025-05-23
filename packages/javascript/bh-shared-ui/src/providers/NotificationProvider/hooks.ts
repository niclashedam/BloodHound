// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { OptionsObject } from 'notistack';
import { useContext } from 'react';
import { NotificationsContext, NotificationsDispatchContext } from './NotificationsProvider';
import { addNotification, dismissNotification, removeNotification } from './actions';

export const useNotifications = () => {
    const notifications = useContext(NotificationsContext);
    const dispatch = useContext(NotificationsDispatchContext);

    return {
        notifications,
        addNotification: (notification: string, key?: string, options: OptionsObject = {}) => {
            if (dispatch) dispatch(addNotification(notification, key, options));
        },
        dismissNotification: (key?: string) => {
            dispatch && dispatch(dismissNotification(key));
        },
        removeNotification: (key?: string) => {
            dispatch && dispatch(removeNotification(key));
        },
    };
};
