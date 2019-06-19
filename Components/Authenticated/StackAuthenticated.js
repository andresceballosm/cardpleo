import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Payments from './Payments';
import PaymentsGeneric from './PaymentsGeneric';

const StackAuthenticated = StackNavigator({
    PaymentsGeneric: {
        screen: PaymentsGeneric,
    },
    Payments: {
        screen: Payments,
    }
});

export { StackAuthenticated };

