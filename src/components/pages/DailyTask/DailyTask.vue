<template>
	<div>
		<div class="container-sm text-start">
			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">PID</label>
				<div class="col-sm-10">
					<div class="form-group">
						<input type="text" class="form-control" list="pid" placeholder="Type to search..." v-model="pidinput" />
						<datalist id="pid">
							<option v-for="pids in pid" :key="pids.id" data-value="c.id"> [{{ pids.pid }}] - {{ pids.projectName }} </option>
						</datalist>

						<!-- <input type="text" class="form-control" style="width: 100%;" list="pid" />
					<datalist id="pid" class="datalist">
						<option v-for="pids in pid" :key="pids.id" data-value="c.id"> [{{ pids.pid }}] - {{ pids.projectName }} </option>
					</datalist> -->
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-sm-2 col-form-label">Rencana Jam Kerja</label>
				<div class="col-sm-10">
					<input type="number" class="form-control" id="plan" />
				</div>
			</div>
			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">Mulai Pengerjaan</label>
				<div class="col-sm-10">
					<Datepicker v-model="model.date" :format="DatePickerFormat" :disabledDates="disabledDates"> </Datepicker>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="staticEmail" class="col-sm-2 col-form-label">Keterangan</label>
				<div class="col-sm-10">
					<div class="form-floating">
						<textarea class="form-control" placeholder="Leave a comment here" id="keterangan" style="height: 100px"></textarea>
					</div>
				</div>
			</div>

			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col" v-for="taskDetails in taskDetail" :key="taskDetails.id">
					<div class="card h-100">
						<div class="card-header">
							<h5 class="card-title">#{{ taskDetails.pid }} - {{ taskDetails.projectName }}</h5>
						</div>
						<div class="card-body">
							<div class="row rowmrg">
								<div class="col-md-6">
									<p class="card-text">Rencana Jam Kerja</p>
								</div>
								<div class="col-md-1"><p>:</p></div>
								<div class="col-md-3">
									<p class="card-text">{{ taskDetails.workingHourPlan }} Jam</p>
								</div>
							</div>
							<div class="row rowmrg">
								<div class="col-md-6">
									<p class="card-text">Jam Kerja Sebenarnya</p>
								</div>
								<div class="col-md-1"><p>:</p></div>
								<div class="col-md-3">
									<p class="card-text">{{ taskDetails.workingHourActual }} Jam</p>
								</div>
							</div>
							<div class="row rowmrg">
								<div class="col-md-6">
									<p class="card-text">Tanggal Mulai</p>
								</div>
								<div class="col-md-1"><p>:</p></div>
								<div class="col-md-5">
									<p class="card-text">{{ taskDetails.startDate }}</p>
								</div>
							</div>
							<div class="row rowmrg">
								<p class="card-text">{{ taskDetails.taskDetail }}</p>
							</div>
						</div>
						<div class="card-footer">
							<div class="row ">
								<div class="col-md-6 d-grid">
									<button type="button" class="btn btn-outline-success">Perbaharui</button>
								</div>
								<div class="col-md-6 d-grid">
									<button
										type="button"
										class="btn btn-outline-primary"
										@click="detailTask(taskDetails.id, taskDetails.pid, taskDetails.projectName, taskDetails.workingHourPlan, taskDetails.workingHourActual, taskDetails.startDate, taskDetails.taskDetail)"
										data-bs-toggle="modal"
										data-bs-target="#staticBackdrop"
									>
										Lihat Detail
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</div>
		<!-- Button trigger modal -->
		<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
			Launch static backdrop modal
		</button> -->

		<!-- Modal -->
		<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{ detail.pid }} - {{ detail.projectName }}</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body text-start">
						<div class="row">
							<div class="col-md-5">
								<p>Start Date</p>
							</div>
							<div class="col-md-5">
								<p>{{ detail.startDate }}</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-5">
								<p>Plan</p>
							</div>
							<div class="col-md-2">
								<p>{{ detail.plan }} Jam</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-5">
								<p>Actual</p>
							</div>
							<div class="col-md-2">
								<p>{{ detail.actual }} Jam</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<p>{{ detail.task }}</p>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Datepicker from 'vuejs-datepicker';
// import $ from 'jquery';
export default {
	name: 'DailyTask',
	components: { Datepicker },
	data() {
		return {
			pid: [],
			taskDetail: [],
			detail: {
				id: '',
				pid: '',
				projectName: '',
				plan: '',
				actual: '',
				startDate: '',
				task: ''
			},
			pidinput: '',
			model: {
				date: ''
			},
			DatePickerFormat: 'dd/MM/yyyy',
			disabledDates: {
				to: new Date(Date.now() - 8640000)
			}
		};
	},
	methods: {
		// async getPid() {
		// 	const data = await fetch('http://localhost:getProjectService?userId=102&parameter=Y');
		// 	const res = await data.json();

		// 	this.results = res;
		// },
		async getPid() {
			console.info('pid');
			const headers = new Headers();
			const aksestoken = 'd3d5a3ef-829d-4f59-b0ac-3f123983212a';
			headers.append('Authorization', `Bearer ` + aksestoken);
			const request = new Request('http://localhost:8881/bvnextgen/api/getProjectService?userId=102&parameter=Y', {
				method: 'GET',
				headers
			});
			const res = await fetch(request);
			const resultPid = await res.json();
			if (resultPid['0'].serviceContent.status == 'S') {
				for (let i = 0; i < resultPid['0'].serviceContent.serviceOutput.length; i++) {
					// this.listPid.id.push(resultPid['0'].serviceContent.serviceOutput[i].id);
					// this.listPid.pid.push(resultPid['0'].serviceContent.serviceOutput[i].pid);
					// this.listPid.projectName.push(resultPid['0'].serviceContent.serviceOutput[i].projectName);
					this.pid.push(resultPid['0'].serviceContent.serviceOutput[i]);
				}
				this.getTask();
			}

			// console.info(JSON.stringify(this.pid));
		},
		async getTask() {
			console.info('task');
			const headers = new Headers();
			const aksestoken = 'd3d5a3ef-829d-4f59-b0ac-3f123983212a';
			headers.append('Authorization', `Bearer ` + aksestoken);
			const dateRange = '20210222-20210329';
			const request = new Request('http://localhost:8881/bvnextgen/api/getDailyService?userId=102&parameter=' + dateRange, {
				method: 'GET',
				headers
			});
			const res = await fetch(request);
			const resultTask = await res.json();
			// console.info(JSON.stringify(resultTask));
			if (resultTask['0'].serviceContent.status == 'S') {
				for (let i = 0; i < resultTask['0'].serviceContent.serviceOutput.length; i++) {
					// this.listPid.id.push(resultPid['0'].serviceContent.serviceOutput[i].id);
					// this.listPid.pid.push(resultPid['0'].serviceContent.serviceOutput[i].pid);
					// this.listPid.projectName.push(resultPid['0'].serviceContent.serviceOutput[i].projectName);
					this.taskDetail.push(resultTask['0'].serviceContent.serviceOutput[i]);
				}
			}

			// console.info(JSON.stringify(this.taskDetail));
		},
		detailTask(id, pid, projectName, plan, actual, startDate, task) {
			this.detail.id = id;
			this.detail.pid = pid;
			this.detail.projectName = projectName;
			this.detail.plan = plan;
			this.detail.actual = actual;
			this.detail.startDate = startDate;
			this.detail.task = task;
		}
	},
	mounted() {
		// this.getPid();
		this.getPid();
	}
};
</script>
<style scoped>
.slc {
	border-radius: 5px;
}
.datalist {
	width: 500px;
}
.rowmrg {
	margin: 5px;
}
.inputDate {
	display: block;
	width: 100%;
}
</style>
