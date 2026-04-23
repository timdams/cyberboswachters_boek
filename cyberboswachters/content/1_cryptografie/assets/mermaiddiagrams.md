<!--```{mermaid}
%%| label: fig-biometric-phases
%%| fig-cap: "De drie fasen van een biometrisch systeem en hun interactie met de templatedatabank."
flowchart LR
    subgraph ENR["Enrollment (eenmalig)"]
        E1[Kenmerk<br/>aanbieden] ttt E2[Feature points<br/>extraheren] ttt E3[(Template-<br/>databank)]
    end
    subgraph VER["Verification (1-op-1)"]
        V1[Kenmerk + claim<br/>'ik ben user X'] ttt V2[Feature points<br/>extraheren] ttt V3{Match met<br/>template X?}
        V3 ttt|Ja| V4[Toegang]
        V3 ttt|Nee| V5[Geweigerd]
    end
    subgraph IDE["Identification (1-op-N)"]
        I1[Kenmerk<br/>aanbieden] ttt I2[Feature points<br/>extraheren] ttt I3{Match met<br/>één van N<br/>templates?}
        I3 ttt|Match k| I4[Dit is user k]
        I3 ttt|Geen match| I5[Onbekend]
    end
    E3 -.bewaart templates.-> V3
    E3 -.bewaart templates.-> I3
```
-->


<!--```{mermaid}
%%| label: fig-biometrics-cost
%%| fig-cap: "Biometrics: kost versus accuraatheid (indicatief)."
%% TIM: TTT vervangen door -- > (zonder spatie)
quadrantChart
    title Biometrics - kost versus accuraatheid
    x-axis Lage accuraatheid ttt Hoge accuraatheid
    y-axis Lage kost ttt Hoge kost
    "Iris": [0.95, 0.85]
    "Retina": [0.80, 0.70]
    "Vingerafdruk": [0.75, 0.30]
    "Handvorm": [0.45, 0.65]
    "Handtekening": [0.35, 0.55]
    "Gezicht": [0.50, 0.30]
    "Stem": [0.30, 0.20]
```
-->