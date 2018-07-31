rm android/app/build/outputs/apk/android-release-unsigned.apk
find android/app/build/outputs/apk/*.apk | xargs -I % curl --progress-bar https://upload.testfairy.com/api/upload -F api_key='96e53511f58d0c3e7e1f9a93291af6b22979322a' -F file=@%  | tee /dev/null
