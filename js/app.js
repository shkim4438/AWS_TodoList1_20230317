window.onload = () => {
    AsideEvent.getInstance().addEventShowMenuButton();
    AsideEvent.getInstance().addEventMainChange();
    InfomationService.getInstance().loadInfo();
    InfomationEvent.getInstance().addEventPhotoChangeClick();
    InfomationEvent.getInstance().addEventPhotoChange();
    InfomationEvent.getInstance().addEventAboutMeModifyClick();
    InfomationEvent.getInstance().addEventAboutMeSaveClick();
    InfomationEvent.getInstance().addEventIntroduceModifyClick();
    InfomationEvent.getInstance().addEventIntroduceSaveClick();
    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
    

}