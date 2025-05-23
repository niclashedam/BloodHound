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

import { Typography } from '@mui/material';
import { FC } from 'react';

const Opsec: FC = () => {
    return (
        <>
            <Typography variant='body2'>
                When abusing a GMSA that is already logged onto a system, you will have the same opsec considerations as
                when abusing a standard user logon. For more information about that, see the "HasSession" modal's opsec
                considerations tab.
            </Typography>
            <Typography variant='body2'>
                When retrieving the GMSA password from Active Directory, you may generate a 4662 event on the Domain
                Controller; however, that event will likely perfectly resemble a legitimate event if you request the
                password from the same context as a computer account that is already authorized to read the GMSA
                password.
            </Typography>
        </>
    );
};

export default Opsec;
