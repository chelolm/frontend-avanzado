import { async, TestBed } from '@angular/core/testing';
import { ProfileStudyModifyStudiesComponent } from './profile-study.component';
describe('ProfileStudyModifyComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProfileStudyModifyStudiesComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProfileStudyModifyStudiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-study.component.spec.js.map