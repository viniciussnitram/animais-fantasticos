export default function initOperation() {
    const operation = document.querySelector('[data-week]');
    const operationDaysWeek = operation.dataset.week.split(',').map(Number);
    const operationHours = operation.dataset.hour.split(',').map(Number);

    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const timeNow = dateNow.getHours();

    const isOperationDayWeek = operationDaysWeek.indexOf(dayNow) !== -1;
    const isOperationHour = timeNow >= operationHours[0] && timeNow < operationHours[1];

    if (isOperationDayWeek && isOperationHour)
        operation.classList.add('open');
}
