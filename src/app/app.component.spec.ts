import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { WeatherService } from "./weather/weather.service";
import { WeatherServiceFake } from "./weather/weather.service.fake";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'local-weather'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("local-weather");
  }));
});
