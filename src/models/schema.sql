-----Initialize table----------------
DROP TABLE IF EXISTS `data`;

CREATE TABLE `data` (
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_traded_price` decimal(10,2) NOT NULL,
  `buy` decimal(10,2) NOT NULL,
  `sell` decimal(10,2) NOT NULL,
  `base_unit` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `volume` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
