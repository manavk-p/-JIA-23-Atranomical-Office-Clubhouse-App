
import { Text, SafeAreaView, View, TextInput } from "react-native";
import styles from "./styles";

const ForgotPassword = () => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View>
                <View style={styles.screenHeader}>
                <Text style={styles.titleText}>
                    {'Forgot Password'}
                </Text>
                </View>
            </View>

            <View>
                <Text style={styles.forgotBtn}>
                    Please enter the email you would like a reset password
                </Text>
                <Text style={styles.forgotBtn}>
                    email sent to:
                </Text>
            </View>

            <View style={styles.forgotBtnInputPane}> 
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.forgotBtnInput}
                        placeholder="Email Address"
                        autoComplete="email"
                        placeholderTextColor="#003f5c"
                        // onChangeText={(email) => TODO: Send email to reset password to employee}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
export default ForgotPassword;