import {
    getCameraPermissionsAsync,
    launchCameraAsync,
    launchImageLibraryAsync,
    requestCameraPermissionsAsync,
    type ImagePickerAsset,
} from 'expo-image-picker';
import { useState } from 'react';

export const useImage = () => {
    const [image, setImage] = useState<ImagePickerAsset | null>();

    const launchCamera = async () => {
        const { status } = await getCameraPermissionsAsync();
        if (status !== 'granted') {
            const { status } = await requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('نحتاج إلى إذن استخدام الكاميرا حتى تتمكن من تصوير أغراضك.');
                return;
            }
        }
        const result = await launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            quality: 1,
            base64: false,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    return { image, launchCamera };
};
