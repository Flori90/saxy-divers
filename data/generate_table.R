setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

train_date <- seq.Date(as.Date("2019/1/1"),as.Date("2019/12/31"), by = "day")

indoor_season_2018 <- c(as.Date("2018/10/1"),as.Date("2019/3/31"))
outdoor_season_2019 <- c(as.Date("2019/4/1"),as.Date("2019/9/30"))


tatt <- tibble(Datum = train_date, Event = NA, Florian = 0, Vera = 0)
tatt <- tatt %>% 
  mutate(Event = case_when(format(Datum,"%A") %in% c("Montag","Donnerstag") &
                             Datum > indoor_season_2018[1] &
                             Datum <= indoor_season_2018[2] 
                           ~ "Training HTWK (Halle)",
                           format(Datum,"%A") %in% c("Dienstag","Donnerstag") & 
                             Datum > outdoor_season_2019[1] &
                             Datum <= outdoor_season_2019[2]
                           ~ "Training ATV (Rasen)",
                           TRUE ~ as.character(NA)))



write.table(tatt$Datum,"date.txt", eol = ",", row.names = FALSE, col.names = FALSE)
write.table(tatt$Event,"event.txt", eol = ",", row.names = FALSE, col.names = FALSE)
