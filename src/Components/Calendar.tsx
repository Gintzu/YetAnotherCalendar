const Calendar = () => {
	return (
		<div className="calendarApp">
			<div className="calendar">
				<h1 className="heading">Calendar</h1>
				<div className="navigateDate">
					<h2 className="month">July,</h2>
					<h2 className="year">2024</h2>
					<div className="navButtons">
						<button className="navLeft">Пред</button>
						<button className="navRight">След</button>
					</div>
				</div>
				<div className="weekDays">
					<span>Пн</span>
					<span>Вт</span>
					<span>Ср</span>
					<span>Чт</span>
					<span>Пт</span>
					<span>Сб</span>
					<span>Вс</span>
				</div>
				<div className="days">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span>12</span>
					<span>13</span>
					<span>14</span>
					<span>15</span>
					<span>16</span>
					<span>17</span>
					<span>18</span>
					<span>19</span>
					<span>20</span>
					<span>21</span>
					<span>22</span>
					<span>23</span>
					<span>24</span>
					<span>25</span>
					<span>26</span>
					<span>27</span>
					<span>28</span>
					<span>29</span>
					<span>30</span>
					<span>31</span>
				</div>
			</div>
			<div className="tasks">
				<div className="taskPopup">
					<div className="timeInput">
						<div className="taskPopupTime">Время</div>
						<input
							type="number"
							name="hours"
							min={0}
							max={24}
							className="hours"
						/>
						<input
							type="number"
							name="minutes"
							min={0}
							max={60}
							className="minutes"
						/>
					</div>
					<textarea
						placeholder="Что бы вы хотели сделать?"
						name="taskBody"
						id="taskBody"
					></textarea>
					<button className="taskPopupButton">Создать задачу</button>
					<button className="closeTaskPopupButton">Закрыть</button>
				</div>
				<div className="task">
					<div className="taskDateWrapper">
						<div className="taskDate">20 июля</div>
						<div className="taskTime">15:15</div>
					</div>
					<div className="taskText">Разработать календарь</div>
					<div className="taskButtons">
						<button className="editTask">Изменить</button>
						<button className="deleteTask">Удалить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
