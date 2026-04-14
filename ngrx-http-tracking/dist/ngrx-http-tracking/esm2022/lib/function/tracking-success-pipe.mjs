import { Observable } from "rxjs";
export function httpTrackingSuccessFilter(source) {
    return new Observable(subscriber => {
        source.subscribe({
            next(value) {
                if (value.success) {
                    return subscriber.next(true);
                }
            },
            error(error) {
                subscriber.error(error);
            },
            complete() {
                subscriber.complete();
            },
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctc3VjY2Vzcy1waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1odHRwLXRyYWNraW5nL3NyYy9saWIvZnVuY3Rpb24vdHJhY2tpbmctc3VjY2Vzcy1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFaEMsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE1BQWdEO0lBQ3hGLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLO2dCQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDakIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUM7WUFDRCxLQUFLLENBQUMsS0FBSztnQkFDVCxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFDRCxRQUFRO2dCQUNOLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtIdHRwVHJhY2tpbmdSZXN1bHR9IGZyb20gXCIuLi8rc3RhdGUvaHR0cC10cmFja2luZy5mYWNhZGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBodHRwVHJhY2tpbmdTdWNjZXNzRmlsdGVyKHNvdXJjZTogT2JzZXJ2YWJsZTxIdHRwVHJhY2tpbmdSZXN1bHQ8YW55LCBhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgc291cmNlLnN1YnNjcmliZSh7XG4gICAgICBuZXh0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5zdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==